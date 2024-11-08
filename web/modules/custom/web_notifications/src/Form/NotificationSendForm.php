<?php

namespace Drupal\web_notifications\Form;

use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 *
 */
class NotificationSendForm extends FormBase {

  protected $entityTypeManager;

  public function __construct(EntityTypeManagerInterface $entity_type_manager) {
    $this->entityTypeManager = $entity_type_manager;
  }

  /**
   *
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('entity_type.manager')
    );
  }

  /**
   *
   */
  public function getFormId() {
    return 'notification_send_form';
  }

  /**
   *
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['user'] = [
      '#type' => 'entity_autocomplete',
      '#title' => $this->t('User'),
      '#target_type' => 'user',
      '#required' => TRUE,
    ];

    $form['message'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Message'),
      '#required' => TRUE,
    ];

    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Send Notification'),
    ];

    return $form;
  }

  /**
   *
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $values = $form_state->getValues();

    $notification = $this->entityTypeManager->getStorage('notification')->create([
      'user_id' => $values['user'],
      'message' => $values['message'],
    ]);

    $notification->save();

    // Check if user has mobile app flag and send push notification.
    $user = $this->entityTypeManager->getStorage('user')->load($values['user']);
    if ($user->hasField('field_has_mobile_app') && $user->field_has_mobile_app->value) {
      // Implement your mobile push notification logic here.
    }

    $this->messenger()->addMessage($this->t('Notification sent successfully.'));
  }

}

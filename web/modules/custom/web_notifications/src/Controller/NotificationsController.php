<?php

namespace Drupal\web_notifications\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 *
 */
class NotificationsController extends ControllerBase {

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
  public function dashboard() {
    $query = $this->entityTypeManager->getStorage('notification')->getQuery();
    $nids = $query->sort('created', 'DESC')
      ->execute();

    $notifications = $this->entityTypeManager->getStorage('notification')->loadMultiple($nids);

    return [
      '#theme' => 'notifications_dashboard',
      '#notifications' => $notifications,
    ];
  }

  /**
   *
   */
  public function userNotifications($user) {
    $query = $this->entityTypeManager->getStorage('notification')->getQuery();
    $nids = $query->condition('user_id', $user->id())
      ->sort('created', 'DESC')
      ->execute();

    $notifications = $this->entityTypeManager->getStorage('notification')->loadMultiple($nids);

    return [
      '#theme' => 'notifications_user',
      '#notifications' => $notifications,
    ];
  }

}

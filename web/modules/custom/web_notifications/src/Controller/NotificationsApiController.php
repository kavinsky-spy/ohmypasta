<?php

namespace Drupal\web_notifications\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 *
 */
class NotificationsApiController extends ControllerBase {

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
  public function checkNotifications($user) {
    $query = $this->entityTypeManager->getStorage('notification')->getQuery();
    $nids = $query->condition('user_id', $user->id())
      ->condition('read', FALSE)
      ->sort('created', 'DESC')
      ->execute();

    $notifications = $this->entityTypeManager->getStorage('notification')->loadMultiple($nids);

    $response = [];
    foreach ($notifications as $notification) {
      $response[] = [
        'id' => $notification->id(),
        'message' => $notification->message->value,
        'created' => $notification->created->value,
      ];
    }

    return new JsonResponse($response);
  }

}

<?php

namespace Drupal\web_notifications\Entity;

use Drupal\Core\Entity\ContentEntityBase;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\Core\Field\BaseFieldDefinition;

/**
 * Defines the Notification entity.
 *
 * @ContentEntityType(
 *   id = "notification",
 *   label = @Translation("Notification"),
 *   base_table = "notifications",
 *   entity_keys = {
 *     "id" = "id",
 *     "uuid" = "uuid",
 *   },
 * )
 */
class Notification extends ContentEntityBase {

  /**
   *
   */
  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
    $fields = parent::baseFieldDefinitions($entity_type);

    $fields['user_id'] = BaseFieldDefinition::create('entity_reference')
      ->setLabel(t('User'))
      ->setDescription(t('The user receiving the notification.'))
      ->setSetting('target_type', 'user')
      ->setRequired(TRUE);

    $fields['message'] = BaseFieldDefinition::create('text_long')
      ->setLabel(t('Message'))
      ->setDescription(t('The notification message.'))
      ->setRequired(TRUE);

    $fields['read'] = BaseFieldDefinition::create('boolean')
      ->setLabel(t('Read'))
      ->setDescription(t('Whether the notification has been read.'))
      ->setDefaultValue(FALSE);

    $fields['created'] = BaseFieldDefinition::create('created')
      ->setLabel(t('Created'))
      ->setDescription(t('The time the notification was created.'));

    return $fields;
  }

}

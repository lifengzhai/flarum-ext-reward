<?php

namespace Lifengzhai\Reward;

use Flarum\Core\Validator\AbstractValidator;

class RewardValidator extends AbstractValidator
{
    /**
     * {@inheritdoc}
     */
    protected $rules = [
      'number' => ['required', 'number'],
    ];
}
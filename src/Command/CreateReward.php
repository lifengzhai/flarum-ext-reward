<?php

namespace Lifengzhai\Reward\Command;

use Flarum\Core\User;

class CreateReward
{
    public $actor;

    public $data;

    public function __construct(User $actor, array $data)
    {
        $this->actor = $actor;
        $this->data = $data;
    }
}
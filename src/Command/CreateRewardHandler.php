<?php

namespace Lifengzhai\Reward\Command;

use Lifengzhai\Reward\Command\CreateReward;
use Lifengzhai\Reward\RewardValidator;
use Lifengzhai\Reward\Reward;

class CreateRewardHandler
{
    protected $validator;

    public function __construct(RewardValidator $validator)
    {
        $this->validator = $validator;
    }

    public function handle(CreateReward $commend)
    {
        $actor = $commend->actor;
        $data = $commend->data;

        $reward = Reward::build(
            array_get($data, 'attributes.num')
        );
        $reward->save();

        return $reward;
    }
}
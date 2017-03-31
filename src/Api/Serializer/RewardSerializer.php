<?php
namespace Lifengzhai\Reward\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;

class RewardSerializer extends AbstractSerializer
{
    protected $type = 'reward';

    protected function getDefaultAttributes($reward)
    {
        $attributes = [
            'num' => $reward->num,
        ];

        return $attributes;
    }
}
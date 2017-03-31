<?php

namespace Lifengzhai\Reward;

use Flarum\Database\AbstractModel;

class Reward extends  AbstractModel
{
    protected $table = 'discussions_rewards';

    public $timestamps = true;

    public static function build($num)
    {
        $reward = new static;

        $reward->num = $num;

        return $reward;
    }
}   
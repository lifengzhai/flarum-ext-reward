<?php

namespace Lifengzhai\Reward;

use Flarum\Database\AbstractModel;

class Reward extends  AbstractModel
{
    protected $table = 'discussions_rewards';

    public $timestamps = true;
}   
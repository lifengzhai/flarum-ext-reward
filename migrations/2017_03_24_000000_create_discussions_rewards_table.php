<?php

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

return Migration::createTable(
    'discussions_rewards',
    function (Blueprint $table) {
        $table->integer('discussion_id')->unsigned();
        $table->integer('user_id')->unsigned();
        $table->integer('num')->unsigned()->comment('打赏金额');
        $table->timestamps();
        $table->primary(['discussion_id', 'user_id']);
    }
);

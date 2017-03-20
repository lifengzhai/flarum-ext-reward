<?php

use Flarum\Event\PostWillBeSaved;
use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->listen(PostWillBeSaved::class, function (PostWillBeSaved $event) {
        // do stuff before a post is saved
        $event->post->content = 'This is not what I wrote!';
    });
};
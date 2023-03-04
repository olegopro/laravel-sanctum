<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessageStoreRequest;
use App\Models\Message;
use Illuminate\Http\Request;

class HelpdeskController extends Controller
{
    public function store(MessageStoreRequest $request)
    {
         Message::create($request->validated());
    }
}

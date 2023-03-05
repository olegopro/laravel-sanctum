<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class UserCreate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:create {login} {password}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Создание нового пользователя';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        echo $this->argument('login');
        User::create([
            'name'  => $this->argument('login'),
            'email' => $this->argument('login'),
            'password' => bcrypt($this->argument('password')),
        ]);
    }
}

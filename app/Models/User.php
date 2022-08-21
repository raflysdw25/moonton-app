<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Spatie\Permission\Traits\HasRoles; //Menggunakan package Spatie untuk assign role dari user
use Carbon\Carbon;


class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Supaya getIsActiveAttribute dapat dipanggil melalui Inertia React, perlu dibuat validasinya di app/Http/Middleware/HandleInertiaRequest.php method activePlan
    public function getIsActiveAttribute()
    {
        if(!$this->LastActiveUserSubscription){
            return false;
        }
        $dateNow = Carbon::now();
        $dateExpired = Carbon::create($this->LastActiveUserSubscription->expired_date);
        return $dateNow->lessThanOrEqualTo($dateExpired);
    }

    /**
     * Get the LasActiveUserSubscription associated with the UserSubscription
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function LastActiveUserSubscription(): HasOne
    {
        return $this->hasOne(UserSubscription::class)->wherePaymentStatus('paid')->latest();
    }
}

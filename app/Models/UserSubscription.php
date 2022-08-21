<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserSubscription extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id', 
        'subscription_plan_id', 
        'price', 
        'expired_date',
        'payment_status', //pending, paid
        'snapToken'];

    /**
     * Get the subscriptionPlan that owns the SubscriptionPlan
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function subscriptionPlan(): BelongsTo
    {
        // berdasarkan subscription_plan_id
        return $this->belongsTo(SubscriptionPlan::class);
    }
}

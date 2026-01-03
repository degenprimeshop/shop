'use server'

import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

// 1. SILENT CONNECTION TO DATABASE
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// ---------------------------------------------------------
// FUNCTION A: SUBMIT ORDER (Used by Home Page)
// ---------------------------------------------------------
export async function submitOrder(formData: FormData) {
  const url = formData.get('url') as string
  
  if (!url) return { success: false, message: 'URL_MISSING' }

  // Simulate pricing and hash generation
  const randomPrice = Math.floor(Math.random() * 800) + 50
  const randomHash = `0x${Math.random().toString(16).slice(2, 10)}`
  
  const { error } = await supabase
    .from('orders')
    .insert({
      tx_hash: randomHash,
      item_name: 'AMAZON_LINK_DETECTED',
      customer_handle: 'ANON_USER',
      value_usd: randomPrice,
      status: 'PENDING_PAYMENT',
      flagged: false
    })

  if (error) {
    console.error('Database Error:', error)
    return { success: false, message: 'DB_REJECTED' }
  }

  return { success: true, message: 'ORDER_INITIATED' }
}

// ---------------------------------------------------------
// FUNCTION B: LOGOUT (Used by Admin Dashboard)
// ---------------------------------------------------------
export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_access')
  redirect('/login')
}

// ---------------------------------------------------------
// FUNCTION C: CHECK PASSWORD (Used by Login Page)
// ---------------------------------------------------------
export async function checkPassword(input: string) {
  // Hardcoded Master Key to bypass Environment Variable issues
  const MASTER_KEY = "Degen9202Sutter";
  
  if (input === MASTER_KEY) {
    return { success: true };
  } else {
    return { success: false };
  }
}
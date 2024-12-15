// Sets up and exports the Supabase client

import {createClient} from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const SUPABASE_URL = process.env.SUPABASE_URL || ''
const SUPABASE_ANON_KEY = process.env.SUPABASE_KEY || ''

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
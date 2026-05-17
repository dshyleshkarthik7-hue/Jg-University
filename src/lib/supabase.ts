import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mtovfsnrzdgkrewqxfrr.supabase.co';
const supabaseAnonKey = 'sb_publishable_91ak4YAzEhvxCuVvDEMwGw_n5SbmrkJ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
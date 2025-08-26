-- Fix security issue: Add explicit SELECT policy to deny public access to sensitive registration data

-- Drop the existing service role policy to recreate it more securely
DROP POLICY IF EXISTS "Service role can view all registrations" ON public.registrations;

-- Create a restrictive SELECT policy that explicitly denies public access
-- Only authenticated users with proper authorization can read registration data
CREATE POLICY "Deny public access to registrations" 
ON public.registrations 
FOR SELECT 
USING (false);

-- Create a policy for administrative access (for future admin functionality)
-- This will require implementing authentication and user roles
CREATE POLICY "Admin users can view registrations" 
ON public.registrations 
FOR SELECT 
TO authenticated
USING (
  -- For now, this will block all access until admin roles are implemented
  -- This ensures no unauthorized access to sensitive data
  false
);

-- Add a comment to the table to document the security consideration
COMMENT ON TABLE public.registrations IS 'Contains sensitive user registration data - access restricted to authorized administrators only';
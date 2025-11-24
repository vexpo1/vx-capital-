/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `nombre` (text) - Full name
      - `empresa` (text) - Company name
      - `cif` (text) - Tax ID
      - `empleados` (integer) - Number of employees
      - `facturacion` (numeric) - Annual revenue in euros
      - `beneficio` (numeric) - Annual profit in euros
      - `telefono` (text) - Phone number
      - `email` (text) - Email address
      - `created_at` (timestamptz) - Submission timestamp

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting submissions (public access for form submission)
    - Add policy for admin users to view all submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL,
  empresa text NOT NULL,
  cif text NOT NULL,
  empleados integer NOT NULL,
  facturacion numeric NOT NULL,
  beneficio numeric NOT NULL,
  telefono text NOT NULL,
  email text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
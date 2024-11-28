CREATE TABLE podcasts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  audio_url VARCHAR(255) NOT NULL,
  image_url VARCHAR(255),
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Allow all users to select podcasts
CREATE POLICY "allow_select_podcasts" ON podcasts
FOR SELECT USING (TRUE);

-- Function to update the updated_at field
CREATE OR REPLACE FUNCTION update_podcasts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

-- Trigger to call the function before update
CREATE TRIGGER update_podcasts_updated_at
BEFORE UPDATE ON podcasts
FOR EACH ROW
EXECUTE PROCEDURE update_podcasts_updated_at();
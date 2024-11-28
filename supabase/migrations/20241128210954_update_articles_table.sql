ALTER TABLE articles
ADD COLUMN podcast_id INTEGER REFERENCES podcasts(id) ON DELETE SET NULL;

-- Allow all users to select published articles
CREATE POLICY "allow_select_published_articles" ON articles
FOR SELECT USING (status = 'published');
insert into
public.podcasts
	(title, description, audio_url, image_url)
values
	('Episode 1: Shhh...', 'The Library''s Closed: Tales from a District That Knows Best', 'https://www.buzzsprout.com/2425181/episodes/16121975-shhh-the-library-s-closed-tales-from-a-district-that-knows-best.mp3?download=true', 'episode-01-closing-libraries.png');

insert into
public.articles
	(title, slug, content, podcast_id, status, published_at, updated_at, created_at)
values
	('Test Article', 'slug-01', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, maxime. Accusamus assumenda magnam, at maiores iusto quod maxime earum, blanditiis totam, quasi aut tempore amet adipisci error facere! Sit, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni animi perferendis, mollitia voluptatum doloribus numquam expedita in vel corporis quo nemo incidunt saepe corrupti excepturi ratione a illum odit ad.

* Developing robust ethical guidelines for AI development and deployment
* Investing in AI education and re-skilling programs
* Encouraging interdisciplinary collaboration in AI research
* Implementing transparent and accountable AI systems
* Fostering public dialogue and understanding of AI technologies

Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, maxime. Accusamus assumenda magnam, at maiores iusto quod maxime earum, blanditiis totam, quasi aut tempore amet adipisci error facere! Sit, rerum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio nemo nisi dolor non numquam hic voluptatum animi tempora cupiditate aperiam voluptates praesentium minus enim ipsa atque maiores, nobis quas iste!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, maxime. Accusamus assumenda magnam, at maiores iusto quod maxime earum, blanditiis totam, quasi aut tempore amet adipisci error facere! Sit, rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus porro, omnis dicta explicabo suscipit vero, ad iusto quam quisquam error hic sed dolores eum quidem debitis, sequi laudantium perferendis quia!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, maxime. Accusamus assumenda magnam, at maiores iusto quod maxime earum, blanditiis totam, quasi aut tempore amet adipisci error facere! Sit, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni modi, explicabo tempora tempore officiis fugiat, dolores quae numquam unde voluptate blanditiis perferendis recusandae nobis ratione repellat, enim facilis atque dolorum?', 1, 'published', '2024-11-26 06:49:18', '2024-11-26 06:49:18', '2024-11-26 06:49:18');

INSERT INTO public.sources
	(title, category, description, url)
VALUES
	('MIT Technology Review', 'web', 'MIT Technology Review is a world-renowned, independent media company whose insight, analysis, reviews, interviews and live events explain the newest technologies and their commercial, social and political impacts.', 'https://www.technologyreview.com/'),
	('AI: A Modern Approach', 'book', 'Artificial Intelligence: A Modern Approach (AIMA) is a university textbook on artificial intelligence, written by Stuart J. Russell and Peter Norvig. It was first published in 1995 and the third edition of the book was released 11 December 2009.', 'https://www.amazon.com/Artificial-Intelligence-Modern-Approach-3rd/dp/0136042597'),
	('The AI Podcast', 'journal', 'The AI Podcast brings you the latest news, interviews, and analysis from the world of artificial intelligence.', 'https://blogs.nvidia.com/ai-podcast/');

INSERT INTO public.article_sources
	(article_id, source_id)
VALUES
	(1, 1),
	(1, 2),
	(1, 3);

INSERT INTO public.podcast_sources
	(podcast_id, source_id)
VALUES
	(1, 1);
-- Drop old table if it exists
DROP TABLE IF EXISTS events CASCADE;

-- Create events table
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    date TIMESTAMP NOT NULL,
    location VARCHAR(255) NOT NULL,
    category VARCHAR(100)
);

-- Insert sample events
INSERT INTO events (title, description, date, location, category) VALUES
('Hackathon 2025', '24-hour coding competition open to all majors.', '2025-10-20 10:00:00', 'Student Center Ballroom', 'Technology'),
('Homecoming Football Game', 'Virginia Tech vs. UVA. Tailgate starts at 4PM.', '2025-11-05 18:00:00', 'Lane Stadium', 'Sports'),
('K-Pop Dance Club Showcase', 'Semester-end showcase featuring K-pop covers.', '2025-10-25 19:00:00', 'Burruss Auditorium', 'Music'),
('Guest Lecture: AI Ethics', 'Talk by Dr. Smith on ethical challenges in AI.', '2025-10-30 15:30:00', 'Goodwin Hall 190', 'Talk'),
('Fall Career Fair', 'Meet recruiters from top companies hiring interns and grads.', '2025-11-10 09:00:00', 'Squires Student Center', 'Career'),
('Thanksgiving Potluck', 'Bring your favorite dish and enjoy with friends.', '2025-11-22 12:00:00', 'Owens Dining Hall', 'Social');

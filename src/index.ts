import { Hono } from 'hono';

const app = new Hono()

const todos = [
  [
    { "id": "1", "title": "Buy groceries", "completed": false },
    { "id": "2", "title": "Read a book", "completed": true },
    { "id": "3", "title": "Complete project", "completed": false },
    { "id": "4", "title": "Exercise for 30 minutes", "completed": true },
    { "id": "5", "title": "Call a friend", "completed": false },
    { "id": "6", "title": "Write a blog post", "completed": true },
    { "id": "7", "title": "Learn a new coding concept", "completed": false },
    { "id": "8", "title": "Watch a tutorial", "completed": true },
    { "id": "9", "title": "Organize workspace", "completed": false },
    { "id": "10", "title": "Plan the week ahead", "completed": true }
  ]
]

app.get('/', (c) => {
    return c.text('Endpoints are /todo, /todos and /random')
})

app.get('/todo', (c) => {
  const random_num = Math.floor(Math.random() * 10) + 1; //generates a random number between 1 and 10
  return c.json({ todo: todos[0][random_num] });
});

app.get('/todos', (c) => {
  const upper_range = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const lower_range = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

  const ranged_todos = todos[0].slice(lower_range, upper_range);
  return c.json({todos: ranged_todos});
})

app.get('/random', (c) => {
  const number = Math.random()
  return c.json({ number })
})

export default app

# NAT20 - Digital D&D Campaign Management Tool

A comprehensive tool for Dungeon Masters and Players to manage their D&D 5e campaigns, characters, and sessions.

## Features

### For Dungeon Masters
- Campaign creation and management
- Session scheduling and notes
- NPC and encounter management
- Custom loot tables
- Player invitation system
- Campaign setting documentation

### For Players
- Character creation and management
- Digital character sheets
- Inventory tracking
- Spell management
- Session history
- Campaign notes

## Technical Stack

### Frontend
- Angular 18+
- AWS SDK v3

### Backend
- AWS Lambda (Node.js 20.x)
- Amazon Cognito for authentication
- PostgreSQL for data storage
- API Gateway for RESTful endpoints

## Getting Started

### Prerequisites
```bash
node -v  # v20.x or higher
npm -v   # 9.x or higher
```

### Installation
```bash
# Clone the repository
git clone https://github.com/12jikan/nat20.git

# Install dependencies
cd nat20
npm install

# Start development server
npm run start
```

## Environment Setup
Create a `.env` file with the following variables:
```env
USER_POOL_ID=your_user_pool_id
USER_POOL_CLIENT_ID=your_client_id
IDENTITY_POOL_ID=your_identity_pool_id
DB_NAME=your_db_name
DB_HOST=your_host
DB_PORT=your_port
DB_USER=your_username
DB_PASSWORD=your_password
```

## API Endpoints

### Authentication
- `POST /users` - Register new user
- `POST /login` - User login
- `POST /logout` - User logout
- `GET /current_user` - Get current user

### Campaigns
- `POST /campaigns` - Create campaign
- `GET /campaigns/{id}` - Get campaign details
- `GET /campaigns` - List user's campaigns

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments
- D&D 5e SRD for reference material
- AWS for cloud infrastructure
- The D&D community for inspiration

## Contact
Project Link: [https://github.com/12jihan/nat20](https://github.com/12jihan/nat20)

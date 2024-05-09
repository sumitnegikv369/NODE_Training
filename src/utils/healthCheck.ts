class HealthCheck {
    constructor() {}
  
    async checkHealth() {
      const uptime = process.uptime();
      const message = 'OK';
      const timestamp = Date.now();
  
      return { status: 200, health: { uptime, message, timestamp } };
    }
  }
  
  export default HealthCheck
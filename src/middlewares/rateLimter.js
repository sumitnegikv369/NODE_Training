const rateLimter = (limit) => {
    const requests = new Map();
    return (req,res,next) => {
        const current = requests.get("ip") || 0;
        if (current >= limit) {
            res.status(429).json({ error: "Too Many Requests" });
            return;
          }
       requests.set("ip", current+1);
       next();

       setTimeout(()=>{
        requests.delete("ip");
       }, 5000);

    }
}
module.exports = rateLimter
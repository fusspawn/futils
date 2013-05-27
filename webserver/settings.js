function defaultFor(arg, val) { return typeof arg !== 'undefined' ? arg : val; }

module.exports = {
    "network": { 
        "ip": defaultFor(process.env.IP, "127.0.0.1"),
        "port": defaultFor(process.env.PORT, 80)
    }
}
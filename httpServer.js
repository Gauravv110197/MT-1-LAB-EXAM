import http from 'http';
import fs from 'fs';

let vehicles = [
    {
        id: 1,
        vehicleName: "Hyundai Creta",
        vehicleNumber: "HR26AB1234",
        type: "SUV",
        price: 1500000
    },
    {
        id: 2,
        vehicleName: "Maruti Swift",
        vehicleNumber: "DL8CAF5030",
        type: "Hatchback",
        price: 750000
    },
    {
        id: 3,
        vehicleName: "Tata Nexon",
        vehicleNumber: "UP16AB1234",
        type: "SUV",
        price: 1200000
    }
];
const server = http.createServer((req, res) => {

    if (req.url === "/" && req.method === "GET") {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end("<h1>Welcome to Vehicle Management System</h1>");

}
else if (req.url === "/vehicles" && req.method === "GET") {

    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify(vehicles));

}
else if (req.url === "/info" && req.method === "GET") {

    fs.readFile("public/info.html", "utf8", (err, data) => {

        if (err) {

            res.writeHead(500, {
                "Content-Type": "text/plain"
            });

            res.end("Error reading file");

        } else {

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(data);

        }

    });

}

});
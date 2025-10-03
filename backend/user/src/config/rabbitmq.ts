import ampq from "amqplib"

let channel: ampq.Channel

export const connectRabbitMQ = async () => {
    try {
        const connection = await ampq.connect({
            protocol: "amqp",
            hostname: process.env.RABBITMQ_HOST,
            port: 5672,
            username: process.env.RABBITMQ_USERNAME,
            password: process.env.RABBITMQ_PASSWORD
        })

        channel = await connection.createChannel()
        console.log("RabbitMQ connected successfully")
    } catch (err) {
        console.log("Failed to connect RabbitMQ", err)
    }
}
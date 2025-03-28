export function request(ctx) {
    return {
        operation: "PutItem",
        key: {
            PK: { S: `USER#${ctx.identity.sub}` },
            SK: { S: `WORKOUT#${util.autoId()}` }
        },
        attributeValues: {
            description: { S: ctx.args.description },
            duration: { N: ctx.args.duration.toString() },
            timestamp: { S: util.time.nowISO8601() }
        }
    };
}


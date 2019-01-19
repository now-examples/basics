import { IncomingMessage, ServerResponse } from "http";

export const availableTypesOfSushi = ["maki", "temaki", "uramaki", "nigiri", "sashimi"];

export default (_: IncomingMessage, res: ServerResponse) => {
  // This could be a DB query.

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: availableTypesOfSushi,
    }),
  );
};

type Req = typeof Request;


export function GET(req: Req, args:{params : {userid:string}}) {
  //args:{params : {userid:string}} i.e args should be an object that contains params and has userid which is string
  return Response.json({ userid: args.params.userid });
}

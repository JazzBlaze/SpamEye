
// async function quickstart(uri) {
//     // Create the WebRisk client library.
//     const {WebRiskServiceClient, protos} = require('@google-cloud/web-risk');
//     const client = new WebRiskServiceClient();
  
//     // Create an API request to check for malware, social engineering,
//     // and unwanted software.
//     const request = {
//       uri: uri,
//       threatTypes: [
//         protos.google.cloud.webrisk.v1.ThreatType.MALWARE,
//         protos.google.cloud.webrisk.v1.ThreatType.SOCIAL_ENGINEERING,
//         protos.google.cloud.webrisk.v1.ThreatType.UNWANTED_SOFTWARE,
//       ],
//     };
  
//     // call the WebRisk searchUris API.
//     const {threat} = (await client.searchUris(request))[0];
//     if (threat) {
//       console.info(threat);
//     } else {
//       console.info('no threats found');
//     }
//   }
// export default function Test(){
//     quickstart('')
// }
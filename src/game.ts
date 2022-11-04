import { WEBSOCKET_ADDRESS } from './resources/constants';
import { WS } from './WebSockets/Instance';


let ws = new WS(WEBSOCKET_ADDRESS,'123');

executeTask(async () => {
  await ws.connect()
})

executeTask(async ()=>{
  let req = await ws.request({ route: 'broadcast', data: { message: 'hello' } })
  log(req)
})
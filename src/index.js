import dva from 'dva';
import createLoading from 'dva-loading';
import createHistory from 'history/createBrowserHistory';
import 'normalize.css'
import './index.scss'

const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize
const app = dva({
	history: createHistory(),
	onError(e) {
		console.error(e.message, ERROR_MSG_DURATION);
	},
});

// 2. Plugins
app.use(createLoading());

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

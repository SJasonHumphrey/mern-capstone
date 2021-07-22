export default () => {

    const texts = [
        `{status && (<div className={font-medium text-sm text-green-600} {...props}> </div>)}`,
        `const AuthCard = ({ logo, children }) => ( <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"> )`,
        `const axios = Axios.create({ baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, headers: { 'X-Requested-With': 'XMLHttpRequest'}, withCredentials: true })`,
        `.navbar-brand { font-weight: 600; letter-spacing: 1px; text-transform: uppercase; }`,
        `const initGA = (trackingID, options) => { ReactGA.initialize(trackingID, { ...options });};`,
        `app.use(cors()); app.use(express.urlencoded({extended:false})); app.use(express.json()); app.use(express.static(path.join(__dirname, '../../../build')));`,
        `app.get('*', (req, res) => { res.sendFile(path.resolve(__dirname, '../../../build', 'index.html')); });`,
        `app.get('*', (req, res) => { res.sendFile(path.resolve(__dirname, '../../../build', 'index.html'));});`,
        `const Register = () => { return ( <div> Register </div> )}`,
        `<ControlledEditor onBeforeChange={handleChange} value={value} className="code-mirror-wrapper" options={{ lineWrapping: true }} />`,
        `array([], shape=(0L, 3L), dtype=[('f0', 'S'), ('f1', '<i4'), ('f2', '<i4')])`
    ]

    // return random index from this text array 
    return texts[Math.floor(Math.random()*texts.length)]
}



const logoSize = "h-8 w-8 sm:h-12 sm:w-12 inline-block";

function TechEl({ name, logo }: { name: string, logo: string }) {
    return <div className="flex sm:min-w-32 flex-1 flex-col items-center hover:cursor-pointer px-2 py-4 transition duration-500 ease-in-out hover:scale-105 sm:hover:scale-110">
        <img src={logo} alt={name} className={logoSize} />
        <span className="font-Outfit text-lg font-500 text-center pt-2">{name}</span>
    </div>
}

export default function Techstack() {
    return <div className="max-w-[680px] mx-auto bg-base-200 rounded-box p-4">
        <h2 className="text-3xl font-Outfit" id="services">My Tech Stack</h2>
        <div className="divider" >
            <h3 className="text-xl text-center font-bold font-Outfit pb-4 pt-2" id="backend">Backend</h3>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center">
            <TechEl name="NodeJS" logo="/tech/backend/nodejs.svg" />
            <TechEl name="Typescript" logo="/tech/backend/typescript.svg" />
            <TechEl name="Python" logo="/tech/backend/python.svg" />
            <TechEl name="C++" logo="/tech/backend/cpp.svg" />
            <TechEl name="PHP" logo="/tech/backend/php.svg" />
        </div>

        <div className="divider" >
            <h3 className="text-xl text-center font-bold font-Outfit pb-4 pt-2" id="web">Web Technologies</h3>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center">
            <TechEl name="HTML" logo="/tech/web/html.svg" />
            <TechEl name="CSS3" logo="/tech/web/css.svg" />
            <TechEl name="Javascript" logo="/tech/web/javascript.svg" />
            <TechEl name="React" logo="/tech/web/react.svg" />
            <TechEl name="SCSS" logo="/tech/web/sass.svg" />
            <TechEl name="TailwindCSS" logo="/tech/web/tailwindcss.svg" />
            <TechEl name="Remix" logo="/tech/web/remix.svg" />
            <TechEl name="Webpack" logo="/tech/web/webpack.svg" />
            <TechEl name="Mobx" logo="/tech/web/mobx.svg" />
        </div>

        <div className="divider" >
            <h3 className="text-xl text-center font-bold font-Outfit pb-4 pt-2" id="devops">DevOps</h3>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center">
            <TechEl name="Docker" logo="/tech/devops/docker.svg" />
            <TechEl name="Kubernetes" logo="/tech/devops/kubernetes.svg" />
            <TechEl name="Google Cloud" logo="/tech/devops/google-cloud.svg" />
            <TechEl name="Firebase" logo="/tech/devops/firebase.svg" />
            <TechEl name="Gitlab" logo="/tech/devops/gitlab.svg" />
            <TechEl name="Gitlab CICD" logo="/tech/devops/gitlab-cicd.png" />
            <TechEl name="Github" logo="/tech/devops/github.svg" />
            <TechEl name="Github Actions" logo="/tech/devops/github-actions.svg" />
            <TechEl name="Grafana" logo="/tech/devops/grafana.svg" />
            <TechEl name="Prometheus" logo="/tech/devops/prometheus.svg" />
        </div>

        <div className="divider" >
            <h3 className="text-xl text-center font-bold font-Outfit pb-4 pt-2" id="db">Database</h3>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center">
            <TechEl name="MongoDB" logo="/tech/db/mongodb.svg" />
            <TechEl name="Redis" logo="/tech/db/redis.svg" />
            <TechEl name="PostgreSQL" logo="/tech/db/postgresql.svg" />
        </div>

        <div className="divider">
            <h3 className="text-xl text-center font-bold font-Outfit pb-4 pt-2" id="other">Other Services & Integrations</h3>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center">
            <TechEl name="Stripe" logo="/tech/stripe.svg" />
            <TechEl name="Shopify" logo="/tech/shopify.svg" />
            <TechEl name="Wordpress" logo="/tech/wordpress.svg" />
            <TechEl name="OpenAI" logo="/tech/openai.svg" />
            <TechEl name="Mailgun" logo="/tech/mailgun.svg" />
            <TechEl name="Sendgrid" logo="/tech/sendgrid.svg" />
            <TechEl name="Twilio" logo="/tech/twilio.svg" />
            <TechEl name="Spid" logo="/tech/spid.svg" />
        </div>

        <div className="divider" >
            <h3 className="text-xl text-center font-bold font-Outfit pb-4 pt-2" id="blockchin">Blockchain Technologies</h3>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center">
            <TechEl name="Solidity Smart Contracts" logo="/tech/blockchain/solidity.svg" />
            <TechEl name="Fantom Network" logo="/tech/blockchain/fantom.svg" />
        </div>

        <div className="divider" >
            <h3 className="text-xl text-center font-bold font-Outfit pb-4 pt-2" id="mobile">Mobile</h3>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center">
            <TechEl name="React Native" logo="/tech/react-native.svg" />
        </div>
    </div>
}
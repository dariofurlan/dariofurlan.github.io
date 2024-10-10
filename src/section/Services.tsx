const logoSize = "h-8 w-8 inline-block";

export default function Services() {

    return <div>
        <h2 className="text-3xl font-Outfit" id="services">Servizi</h2>
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border border-gray-300">Category</th>
                        <th className="px-4 py-2 border border-gray-300">Technologies</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">Backend</td>
                        <td className="px-4 py-2 border border-gray-300">Python, NodeJS, Typescript</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">Web</td>
                        <td className="px-4 py-2 border border-gray-300">HTML, CSS3, JS, React, Remix SCSS, TailwindCSS, Bootstrap, Service Workers, PWA</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">Containerization</td>
                        <td className="px-4 py-2 border border-gray-300">
                            <div className="tooltip" data-tip="Docker">
                                <img src="icons/docker.svg" alt="Docker" className={logoSize} />
                            </div>
                            <div className="tooltip" data-tip="Docker Compose">
                                <img src="icons/docker-compose.svg" alt="Docker Compose" className={logoSize} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">Crypto</td>
                        <td className="px-4 py-2 border border-gray-300">Solana Smart Contract, Fantom Network</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">AI/ML</td>
                        <td className="px-4 py-2 border border-gray-300">Speech-to-text, Sentiment Analysis, Chat Bot</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">Hosting</td>
                        <td className="px-4 py-2 border border-gray-300">Kubernetes, Serverless, Google Cloud, Firebase</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">Mobile</td>
                        <td className="px-4 py-2 border border-gray-300">React Native</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">Database</td>
                        <td className="px-4 py-2 border border-gray-300">MongoDB, MySQL, PostgreSQL, Redis</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">CI/CD</td>
                        <td className="px-4 py-2 border border-gray-300">Gitlab CI</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">Websockets</td>
                        <td className="px-4 py-2 border border-gray-300">Socket.io, SSE</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">CMS</td>
                        <td className="px-4 py-2 border border-gray-300">Wordpress</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">E-commerce</td>
                        <td className="px-4 py-2 border border-gray-300">Shopify, WooCommerce</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">Payment Gateway</td>
                        <td className="px-4 py-2 border border-gray-300">Stripe</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
}
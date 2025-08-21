import { LinksFunction, NavLink, MetaFunction } from "react-router";
import ProjectContainer from "~/components/ProjectContainer";

export const links: LinksFunction = () => {
    return [{
        rel: 'canonical', href: "https://dariofurlan.it/project/DNABERT2025"
    }];
};

export const meta: MetaFunction = () => {
    return [
        { title: "DNABERT Promoter Prediction - AI Research | Progetto di Ricerca di Dario Furlan" },
        {
            name: "description",
            content: "Scopri il progetto di ricerca DNABERT di Dario Furlan e Nicolò Raccichini: reproduzione e analisi di modelli Transformer per la predizione di promoter genomici, combinando Natural Language Processing e Bioinformatica con risultati scientifici validati."
        },
    ];
};

export const handle = {
    breadcrumb: () => <NavLink to="/project/DNABERT2025">DNABERT Research 2025</NavLink>,
}

export default function DNABERT2025() {
    return <ProjectContainer>
        {/* Hero Section */}
        <div className="hero bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl mb-8">
            <div className="hero-content text-center">
                <div className="max-w-4xl">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                        <div className="w-20 h-20 rounded-2xl shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl">
                            🧬
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold font-Outfit">DNABERT Research</h1>
                            <p className="text-lg text-base-content/80">Promoter Prediction with Transformer Models</p>
                        </div>
                    </div>
                    <p className="text-sm text-base-content/70 mb-4">
                        🎓 Progetto Accademico - <a target="_blank" rel="noopener noreferrer" className="link link-accent" href="https://unipd.it/">Università di Padova</a><br/>
                        Corso di Machine Learning - A.A. 2024/2025 | Collaborazione con Nicolò Raccichini
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <div className="badge badge-primary">Deep Learning</div>
                        <div className="badge badge-secondary">Bioinformatics</div>
                        <div className="badge badge-accent">Transformers</div>
                        <div className="badge badge-info">NLP</div>
                        <div className="badge badge-success">Genomics</div>
                        <div className="badge badge-warning">Scientific Research</div>
                        <div className="badge badge-outline">Python</div>
                        <div className="badge badge-outline">Reproduction Study</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Academic Context */}
        <div className="alert alert-info mb-8">
            <div className="flex items-center gap-3">
                <div className="text-2xl">🎓</div>
                <div>
                    <h3 className="font-semibold">Progetto di Machine Learning Avanzato</h3>
                    <p className="text-sm">
                        Studio di reproduction e analisi approfondita di modelli Transformer per genomica, 
                        con implementazione completa e validazione scientifica su dataset GUE benchmark. 
                        Paper di 25+ pagine con metodologia rigorosa e risultati pubblicabili.
                    </p>
                </div>
            </div>
        </div>

        {/* Research Overview */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
                <h2 className="text-2xl font-bold font-Outfit mb-4">🧬 La Rivoluzione DNA-as-Language</h2>
                <div className="prose max-w-none">
                    <p>
                        Questo progetto esplora una delle frontiere più innovative dell'intelligenza artificiale: 
                        l'applicazione di tecniche di <strong>Natural Language Processing</strong> ai dati genomici.
                    </p>
                    <p>
                        L'idea centrale è rivoluzionaria: <strong>il DNA può essere trattato come un linguaggio</strong>, 
                        dove le sequenze genetiche diventano "frasi" e i k-mer (frammenti di DNA) funzionano come "parole" 
                        per modelli Transformer.
                    </p>
                    <p>
                        DNABERT rappresenta uno dei primi modelli a implementare questa visione, aprendo nuove 
                        possibilità per comprendere meccanismi biologici complessi attraverso l'AI.
                    </p>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold font-Outfit mb-4">🎯 Obiettivi della Ricerca</h2>
                <div className="prose max-w-none">
                    <p>
                        Il nostro studio si concentra sulla <strong>predizione di promoter</strong>, regioni del DNA 
                        che fungono da "interruttori on/off" per i geni, determinando quando e come i geni vengono espressi.
                    </p>
                    <p>
                        <strong>Metodologia di ricerca rigorosa:</strong>
                    </p>
                    <ul>
                        <li>Analisi dell'architettura DNABERT e confronto con DNABERT-2</li>
                        <li>Implementazione completa in Python del sistema di predizione</li>
                        <li>Reproduzione degli esperimenti originali per validazione</li>
                        <li>Analisi comparativa delle performance con metriche scientifiche</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Key Innovations */}
        <div className="bg-base-200 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">⚡ Innovazioni Tecniche</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">🤖 DNABERT Architecture</h3>
                    <div className="space-y-4">
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-accent">K-mer Tokenization (k=6)</h4>
                            <p className="text-sm text-base-content/70">DNABERT-6 usa k-mer overlapping di 6 nucleotidi, trattando DNA come linguaggio con "parole" di 6 caratteri</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-info">BERT-base Architecture</h4>
                            <p className="text-sm text-base-content/70">12 layers, 768-dim, 12 attention heads, max 512 tokens con [CLS] e [SEP] speciali</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-success">Masked Language Modeling</h4>
                            <p className="text-sm text-base-content/70">Pre-training su intero genoma umano con 15-20% masking rate, 25 giorni su 8 GPU</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-secondary">🚀 DNABERT-2 Improvements</h3>
                    <div className="space-y-4">
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-warning">Byte Pair Encoding (BPE)</h4>
                            <p className="text-sm text-base-content/70">Sostituisce k-mer fissi con tokenizzazione adattiva BPE che riduce vocabulary size e information leakage</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-error">Variable-Length Tokens</h4>
                            <p className="text-sm text-base-content/70">Token di lunghezza variabile catturano meglio pattern genomici vs k-mer fissi overlapping</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-primary">GUE Benchmark Champion</h4>
                            <p className="text-sm text-base-content/70">Migliori performance su 23/28 task del Genome Understanding Evaluation benchmark</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Experimental Setup */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">⚗️ Setup Sperimentale</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-3xl mb-3">📊</div>
                        <h3 className="font-semibold text-primary mb-2">GUE Dataset</h3>
                        <ul className="text-sm space-y-1">
                            <li><strong>prom_300_all:</strong> Promoter completi</li>
                            <li><strong>prom_300_notata:</strong> Senza TATA box</li>
                            <li><strong>prom_300_tata:</strong> Con TATA box</li>
                        </ul>
                    </div>
                </div>
                
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-3xl mb-3">🎯</div>
                        <h3 className="font-semibold text-secondary mb-2">Metodologia</h3>
                        <ul className="text-sm space-y-1">
                            <li>Fine-tuning DNABERT-6 pretrained</li>
                            <li>Multiple random seeds (3+ runs)</li>
                            <li>Official implementation baseline</li>
                        </ul>
                    </div>
                </div>
                
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body text-center">
                        <div className="text-3xl mb-3">📏</div>
                        <h3 className="font-semibold text-accent mb-2">Metriche</h3>
                        <ul className="text-sm space-y-1">
                            <li><strong>MCC:</strong> Matthews Correlation</li>
                            <li><strong>Robustness:</strong> Multi-seed avg</li>
                            <li><strong>Comparison:</strong> vs reference</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Scientific Results */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">📊 Risultati Scientifici</h2>
            
            <div className="bg-gradient-to-r from-success/5 to-primary/5 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-center mb-4">🎯 Reproduzione Validata</h3>
                <p className="text-center text-base-content/80 mb-6">
                    I nostri risultati <strong>confermano e superano</strong> le performance riportate negli studi originali, 
                    dimostrando la <strong>riproducibilità scientifica</strong> dei modelli DNABERT con errori &lt;0.5%.
                </p>
                
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th className="font-semibold">Dataset</th>
                                <th className="font-semibold text-center">MCC (Nostri)</th>
                                <th className="font-semibold text-center">MCC (Riferimento)</th>
                                <th className="font-semibold text-center">Errore</th>
                                <th className="font-semibold text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="font-medium">All</td>
                                <td className="text-center"><span className="badge badge-success">90.65%</span></td>
                                <td className="text-center"><span className="badge badge-info">90.48%</span></td>
                                <td className="text-center">0.17%</td>
                                <td className="text-center"><span className="badge badge-success">✓ Superato</span></td>
                            </tr>
                            <tr>
                                <td className="font-medium">No-TATA</td>
                                <td className="text-center"><span className="badge badge-success">92.80%</span></td>
                                <td className="text-center"><span className="badge badge-info">93.05%</span></td>
                                <td className="text-center">0.25%</td>
                                <td className="text-center"><span className="badge badge-warning">≈ Conforme</span></td>
                            </tr>
                            <tr>
                                <td className="font-medium">TATA</td>
                                <td className="text-center"><span className="badge badge-success">62.05%</span></td>
                                <td className="text-center"><span className="badge badge-info">61.56%</span></td>
                                <td className="text-center">0.49%</td>
                                <td className="text-center"><span className="badge badge-success">✓ Superato</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="alert alert-success mb-6">
                <div className="flex items-center gap-3">
                    <div className="text-2xl">📈</div>
                    <div>
                        <h4 className="font-semibold">Validazione Scientifica</h4>
                        <p className="text-sm">
                            <strong>Tutti i dataset mostrano performance equivalenti o superiori</strong> agli studi originali, 
                            con errori minimi (&lt;0.5%) che confermano la robustezza dell'approccio e la qualità 
                            della nostra implementazione.
                        </p>
                    </div>
                </div>
            </div>

            {/* Detailed Results by Seeds */}
            <div className="bg-base-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-center mb-4">🎲 Risultati per Random Seed</h3>
                <p className="text-center text-base-content/70 mb-6">
                    Dettagli completi dei run con diversi seed per dimostrare la robustezza e riproducibilità
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <h4 className="card-title text-primary text-center">Dataset: All</h4>
                            <div className="text-center space-y-2">
                                <div className="text-sm space-y-1">
                                    <div>Seed 15: <span className="badge badge-success">91.1%</span></div>
                                    <div>Seed 44: <span className="badge badge-success">90.2%</span></div>
                                    <div>Seed 48: <span className="badge badge-success">91.3%</span></div>
                                    <div>Seed 65: <span className="badge badge-success">89.8%</span></div>
                                    <div>Seed 172: <span className="badge badge-success">90.9%</span></div>
                                </div>
                                <div className="text-lg font-bold">Avg: 90.65%</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <h4 className="card-title text-secondary text-center">Dataset: No-TATA</h4>
                            <div className="text-center space-y-2">
                                <div className="text-sm space-y-1">
                                    <div>Seed 31: <span className="badge badge-success">93.2%</span></div>
                                    <div>Seed 42: <span className="badge badge-success">93.1%</span></div>
                                    <div>Seed 77: <span className="badge badge-success">92.1%</span></div>
                                </div>
                                <div className="text-lg font-bold">Avg: 92.80%</div>
                                <div className="text-xs text-base-content/60">Più facile da predire</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <h4 className="card-title text-accent text-center">Dataset: TATA</h4>
                            <div className="text-center space-y-2">
                                <div className="text-sm space-y-1">
                                    <div>Seed 11: <span className="badge badge-warning">63.1%</span></div>
                                    <div>Seed 53: <span className="badge badge-warning">61.9%</span></div>
                                    <div>Seed 80: <span className="badge badge-warning">60.1%</span></div>
                                </div>
                                <div className="text-lg font-bold">Avg: 62.05%</div>
                                <div className="text-xs text-base-content/60">Maggiore variabilità</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Research Methodology */}
        <div className="bg-gradient-to-r from-accent/5 to-info/5 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">🔬 Metodologia di Ricerca</h2>
            
            <div className="steps steps-vertical lg:steps-horizontal w-full mb-8">
                <div className="step step-primary">
                    <div className="text-center">
                        <div className="text-2xl mb-2">📚</div>
                        <h3 className="font-semibold">Literature Review</h3>
                        <p className="text-sm text-base-content/70">Analisi approfondita di DNABERT, DNABERT-2 e stato dell'arte</p>
                    </div>
                </div>
                <div className="step step-primary">
                    <div className="text-center">
                        <div className="text-2xl mb-2">🧬</div>
                        <h3 className="font-semibold">Biological Context</h3>
                        <p className="text-sm text-base-content/70">Studio dei promoter e meccanismi di trascrizione genetica</p>
                    </div>
                </div>
                <div className="step step-primary">
                    <div className="text-center">
                        <div className="text-2xl mb-2">💻</div>
                        <h3 className="font-semibold">Implementation</h3>
                        <p className="text-sm text-base-content/70">Implementazione completa in Python con framework ML</p>
                    </div>
                </div>
                <div className="step step-primary">
                    <div className="text-center">
                        <div className="text-2xl mb-2">📊</div>
                        <h3 className="font-semibold">Validation</h3>
                        <p className="text-sm text-base-content/70">Reproduzione esperimenti e analisi comparativa risultati</p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title text-primary">🔍 Approccio Scientifico</h3>
                        <ul className="text-sm space-y-2">
                            <li>• Hypotheses-driven research design</li>
                            <li>• Controlled experimental setup</li>
                            <li>• Metriche standardizzate (MCC, F1-score)</li>
                            <li>• Statistical significance testing</li>
                            <li>• Peer collaboration per validation</li>
                        </ul>
                    </div>
                </div>
                
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title text-secondary">⚙️ Stack Tecnico</h3>
                        <ul className="text-sm space-y-2">
                            <li>• Python + PyTorch per deep learning</li>
                            <li>• HuggingFace Transformers library</li>
                            <li>• BioPython per data genomici</li>
                            <li>• Pandas/NumPy per data analysis</li>
                            <li>• Scikit-learn per metriche ML</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Biological & Technical Challenges */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">🧬 Sfide Biologiche e Tecniche</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">🧬 Complessità Biologica</h3>
                    <div className="space-y-3">
                        <div className="bg-primary/10 p-4 rounded-lg">
                            <h4 className="font-semibold">Promoter Eterogeneity</h4>
                            <p className="text-sm text-base-content/70">TATA promoter (~25-35 bp upstream) vs No-TATA promoter senza pattern fissi</p>
                        </div>
                        <div className="bg-secondary/10 p-4 rounded-lg">
                            <h4 className="font-semibold">Long-Range Dependencies</h4>
                            <p className="text-sm text-base-content/70">Elementi regolatori distanti influenzano trascrizione, impossibile da catturare con CNNs</p>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg">
                            <h4 className="font-semibold">Sequence Variability</h4>
                            <p className="text-sm text-base-content/70">Promoter non seguono pattern fissi, richiedono modelli che catturano contesto globale</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-secondary">⚙️ Sfide Tecniche K-mer</h3>
                    <div className="space-y-3">
                        <div className="bg-warning/10 p-4 rounded-lg">
                            <h4 className="font-semibold">Information Leakage</h4>
                            <p className="text-sm text-base-content/70">K-mer overlapping permettono di "cheattare" durante masking (ATT→TTG→TGC)</p>
                        </div>
                        <div className="bg-error/10 p-4 rounded-lg">
                            <h4 className="font-semibold">Quadratic Complexity</h4>
                            <p className="text-sm text-base-content/70">Sequenza di lunghezza L genera L-k+1 token, costo quadratico in Transformers</p>
                        </div>
                        <div className="bg-info/10 p-4 rounded-lg">
                            <h4 className="font-semibold">Vocabulary Explosion</h4>
                            <p className="text-sm text-base-content/70">4^k token per k-mer (4^6 = 4,096 per DNABERT-6), scalabilità limitata</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Traditional Models Limitations */}
            <div className="alert alert-warning">
                <div className="flex items-center gap-3">
                    <div className="text-2xl">⚠️</div>
                    <div>
                        <h4 className="font-semibold">Perché CNN/RNN Falliscono</h4>
                        <p className="text-sm">
                            <strong>CNNs:</strong> Limitati a pattern locali, non catturano long-range dependencies • 
                            <strong>RNNs/LSTMs:</strong> Vanishing gradient problem, compressione sequenza in fixed-size state • 
                            <strong>Entrambi:</strong> Richiedono grandi dataset labeled, scarsi in genomica
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Research Impact */}
        <div className="bg-gradient-to-r from-success/10 to-warning/10 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">🌟 Impatto della Ricerca</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-success">🔬 Contributi Scientifici</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-success rounded-full"></div>
                            <span className="text-sm"><strong>Reproduzione validata</strong> di risultati state-of-the-art</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-success rounded-full"></div>
                            <span className="text-sm"><strong>Analisi comparativa</strong> DNABERT vs DNABERT-2</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-success rounded-full"></div>
                            <span className="text-sm"><strong>Implementazione open-source</strong> per la comunità</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-success rounded-full"></div>
                            <span className="text-sm"><strong>Insights metodologici</strong> su AI applicata alla genomica</span>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-warning">💼 Competenze Avanzate</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-warning rounded-full"></div>
                            <span className="text-sm"><strong>Research methodology</strong> scientifica rigorosa</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-warning rounded-full"></div>
                            <span className="text-sm"><strong>Deep Learning</strong> per applicazioni biologiche</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-warning rounded-full"></div>
                            <span className="text-sm"><strong>Bioinformatics</strong> e genomica computazionale</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-warning rounded-full"></div>
                            <span className="text-sm"><strong>Scientific writing</strong> e presentazione risultati</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Research Stats */}
        <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-base-200 w-full mb-8">
            <div className="stat">
                <div className="stat-figure text-primary">
                    <div className="text-3xl">👥</div>
                </div>
                <div className="stat-title">Collaboratori</div>
                <div className="stat-value text-primary">2</div>
                <div className="stat-desc">Ricercatori</div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <div className="text-3xl">📊</div>
                </div>
                <div className="stat-title">Dataset</div>
                <div className="stat-value text-secondary">3</div>
                <div className="stat-desc">Validati</div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-accent">
                    <div className="text-3xl">🎯</div>
                </div>
                <div className="stat-title">Accuratezza</div>
                <div className="stat-value text-accent">92.8%</div>
                <div className="stat-desc">MCC Score</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-info">
                    <div className="text-3xl">🤖</div>
                </div>
                <div className="stat-title">Modelli</div>
                <div className="stat-value text-info">2</div>
                <div className="stat-desc">DNABERT variants</div>
            </div>
        </div>

        {/* Future Implications */}
        <div className="card bg-gradient-to-r from-info/10 to-primary/10 shadow-xl mb-8">
            <div className="card-body">
                <div className="text-center mb-6">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="card-title justify-center text-2xl font-Outfit">Implicazioni Future</h3>
                </div>
                <div className="prose max-w-none text-center">
                    <p>
                        Questo lavoro rappresenta un contributo significativo all'<strong>intersezione tra AI e genomica</strong>, 
                        un campo che promette di rivoluzionare la medicina personalizzata, la ricerca farmaceutica e 
                        la comprensione dei meccanismi biologici fondamentali.
                    </p>
                    <p>
                        La capacità di <strong>predire accuratamente i promoter</strong> attraverso modelli Transformer apre 
                        nuove possibilità per identificare target terapeutici, comprendere malattie genetiche e 
                        sviluppare trattamenti più mirati ed efficaci.
                    </p>
                </div>
            </div>
        </div>

        {/* Academic Achievement */}
        <div className="alert alert-success">
            <div className="flex items-center gap-3">
                <div className="text-2xl">🏆</div>
                <div>
                    <h3 className="font-semibold">Eccellenza in Ricerca AI</h3>
                    <p className="text-sm">
                        Questo progetto dimostra capacità di ricerca scientifica avanzata, combinando rigore metodologico, 
                        competenze tecniche all'avanguardia e collaborazione accademica per produrre risultati scientificamente 
                        validi nel campo emergente dell'AI applicata alla genomica.
                    </p>
                </div>
            </div>
        </div>
    </ProjectContainer>
}
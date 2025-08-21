import { LinksFunction, NavLink, MetaFunction } from "react-router";
import ProjectContainer from "~/components/ProjectContainer";

export const links: LinksFunction = () => {
    return [{
        rel: 'canonical', href: "https://dariofurlan.it/project/PrivacyVision2025"
    }];
};

export const meta: MetaFunction = () => {
    return [
        { title: "Privacy-Preserving Computer Vision - Depth Images | Progetto di Ricerca di Dario Furlan" },
        {
            name: "description",
            content: "Scopri il progetto Privacy-Preserving Computer Vision di Dario Furlan e Dawit Andargachew: classificazione di immagini usando solo dati di profondità per applicazioni sensibili alla privacy, con risultati superiori al 90% su dataset reali."
        },
    ];
};

export const handle = {
    breadcrumb: () => <NavLink to="/project/PrivacyVision2025">Privacy-Preserving Vision 2025</NavLink>,
}

export default function PrivacyVision2025() {
    return <ProjectContainer>
        {/* Hero Section */}
        <div className="hero bg-gradient-to-r from-info/10 to-warning/10 rounded-xl mb-8">
            <div className="hero-content text-center">
                <div className="max-w-4xl">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                        <div className="w-20 h-20 rounded-2xl shadow-xl bg-gradient-to-br from-cyan-500 to-orange-600 flex items-center justify-center text-white text-3xl">
                            🔒
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold font-Outfit">Privacy-Preserving Vision</h1>
                            <p className="text-lg text-base-content/80">Depth-Only Image Classification</p>
                        </div>
                    </div>
                    <p className="text-sm text-base-content/70 mb-4">
                        🎓 Progetto Accademico - <a target="_blank" rel="noopener noreferrer" className="link link-accent" href="https://unipd.it/">Università di Padova</a><br/>
                        Vision and Cognitive Systems - A.A. 2024/2025 | Collaborazione con Dawit Andargachew
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <div className="badge badge-info">Computer Vision</div>
                        <div className="badge badge-warning">Privacy-Preserving</div>
                        <div className="badge badge-primary">Depth Images</div>
                        <div className="badge badge-secondary">CNN Fine-tuning</div>
                        <div className="badge badge-success">Healthcare Applications</div>
                        <div className="badge badge-accent">Marigold Model</div>
                        <div className="badge badge-outline">ImageNet</div>
                        <div className="badge badge-outline">RGB-D Dataset</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Research Innovation */}
        <div className="alert alert-success mb-8">
            <div className="flex items-center gap-3">
                <div className="text-2xl">💡</div>
                <div>
                    <h3 className="font-semibold">Innovazione nella Privacy</h3>
                    <p className="text-sm">
                        <strong>Prima esplorazione sistematica</strong> di classificazione di immagini usando esclusivamente dati di profondità 
                        con CNN standard, dimostrando che si può raggiungere <strong>92% di accuratezza</strong> senza compromettere la privacy.
                    </p>
                </div>
            </div>
        </div>

        {/* Problem Statement */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
                <h2 className="text-2xl font-bold font-Outfit mb-4">🔒 Il Problema della Privacy</h2>
                <div className="prose max-w-none">
                    <p>
                        I sistemi di computer vision tradizionali basati su immagini RGB presentano 
                        <strong> gravi rischi per la privacy</strong> in ambienti sensibili come:
                    </p>
                    <ul>
                        <li><strong>Ospedali</strong> e strutture sanitarie</li>
                        <li><strong>Case di riposo</strong> e centri per anziani</li>
                        <li><strong>Asili</strong> e centri per l'infanzia</li>
                        <li><strong>Ambienti di sorveglianza</strong> pubblica</li>
                    </ul>
                    <p>
                        Le immagini RGB rivelano dettagli personali identificabili come <strong>volti, 
                        abbigliamento e caratteristiche fisiche</strong>, violando la privacy delle 
                        persone vulnerabili.
                    </p>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold font-Outfit mb-4">💡 La Nostra Soluzione</h2>
                <div className="prose max-w-none">
                    <p>
                        Proponiamo un approccio innovativo basato su <strong>immagini di profondità (depth) 
                        esclusivamente</strong>, che mantiene la struttura spaziale necessaria per il 
                        riconoscimento visivo senza sacrificare la privacy.
                    </p>
                    <p>
                        <strong>Domanda di ricerca centrale:</strong> Possono le CNN standard classificare 
                        oggetti usando solo dati di profondità?
                    </p>
                    <p>
                        <strong>Hypothesis:</strong> Le informazioni di profondità contengono struttura 
                        sufficiente per la classificazione efficace, anche senza texture o colore.
                    </p>
                </div>
            </div>
        </div>

        {/* Technical Approach */}
        <div className="bg-base-200 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">⚙️ Approccio Tecnico Innovativo</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">📊 Multi-Dataset Strategy</h3>
                    <div className="space-y-4">
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-accent">ImageNet 1k-class Depth</h4>
                            <p className="text-sm text-base-content/70">50K immagini con depth stimata tramite Marigold diffusion model, 1000 classi</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-info">ImageNet 200-class Subset</h4>
                            <p className="text-sm text-base-content/70">10K immagini, 200 classi random, 50 img/classe per bilanciare dataset</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-success">Washington RGB-D Real Data</h4>
                            <p className="text-sm text-base-content/70">41K immagini reali da Kinect, 51 classi, 821 img/classe media</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-secondary">🧠 Model Architecture Strategy</h3>
                    <div className="space-y-4">
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-warning">Standard CNN Models</h4>
                            <p className="text-sm text-base-content/70">AlexNet, VGG19, ResNet50, Inception-v3 - nessuna modifica architetturale</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-error">Smart Preprocessing</h4>
                            <p className="text-sm text-base-content/70">16-bit→8-bit normalization, channel stacking, colormap mapping (Viridis, Plasma, Magma)</p>
                        </div>
                        <div className="bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold text-primary">Three Training Regimes</h4>
                            <p className="text-sm text-base-content/70">Baseline (no training), Partial fine-tuning (final layers), Complete fine-tuning (all params)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Experimental Results */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">📊 Risultati Sperimentali</h2>
            
            <div className="bg-gradient-to-r from-success/5 to-primary/5 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-center mb-4">🎯 Performance Breakthrough</h3>
                <p className="text-center text-base-content/80 mb-6">
                    I nostri risultati dimostrano che <strong>le immagini depth-only possono competere</strong> 
                    con approcci RGB tradizionali, raggiungendo performance eccellenti su dataset reali.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body text-center">
                            <div className="text-3xl mb-3">🏆</div>
                            <h4 className="font-semibold text-success mb-2">Washington RGB-D</h4>
                            <div className="text-2xl font-bold text-success">92.23%</div>
                            <div className="text-sm text-base-content/70">Top-1 Accuracy (VGG19)</div>
                            <div className="text-xs text-base-content/60">Partial fine-tuning only</div>
                        </div>
                    </div>
                    
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body text-center">
                            <div className="text-3xl mb-3">📈</div>
                            <h4 className="font-semibold text-primary mb-2">ImageNet 1k-class</h4>
                            <div className="text-2xl font-bold text-primary">74.53%</div>
                            <div className="text-sm text-base-content/70">Top-5 Accuracy (Inception-v3)</div>
                            <div className="text-xs text-base-content/60">Complete fine-tuning</div>
                        </div>
                    </div>
                    
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body text-center">
                            <div className="text-3xl mb-3">⚡</div>
                            <h4 className="font-semibold text-secondary mb-2">Performance Gain</h4>
                            <div className="text-2xl font-bold text-secondary">3x</div>
                            <div className="text-sm text-base-content/70">Improvement vs Baseline</div>
                            <div className="text-xs text-base-content/60">Average across models</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Results Tables */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body">
                        <h3 className="card-title text-primary mb-4">📋 ImageNet 1k-class Results</h3>
                        <div className="overflow-x-auto">
                            <table className="table table-xs">
                                <thead>
                                    <tr>
                                        <th>Model</th>
                                        <th>Baseline</th>
                                        <th>Fine-tuned</th>
                                        <th>Gain</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="font-semibold">AlexNet</td>
                                        <td>4.53% / 11.63%</td>
                                        <td><span className="text-success font-semibold">23.62% / 45.89%</span></td>
                                        <td><span className="badge badge-success">5.2x / 3.9x</span></td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">VGG19</td>
                                        <td>10.04% / 22.00%</td>
                                        <td><span className="text-success font-semibold">34.20% / 60.18%</span></td>
                                        <td><span className="badge badge-success">3.4x / 2.7x</span></td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">ResNet50</td>
                                        <td>13.18% / 28.16%</td>
                                        <td><span className="text-success font-semibold">44.95% / 71.89%</span></td>
                                        <td><span className="badge badge-success">3.4x / 2.6x</span></td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Inception-v3</td>
                                        <td>16.48% / 33.05%</td>
                                        <td><span className="text-success font-semibold">48.53% / 74.53%</span></td>
                                        <td><span className="badge badge-success">2.9x / 2.3x</span></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="text-xs text-base-content/60 mt-2">Format: Top-1% / Top-5%</div>
                        </div>
                    </div>
                </div>
                
                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body">
                        <h3 className="card-title text-secondary mb-4">🎯 Washington RGB-D Results</h3>
                        <div className="space-y-3">
                            <div className="bg-base-100 p-3 rounded-lg">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">VGG19</span>
                                    <span className="text-success font-bold">92.23% / 99.16%</span>
                                </div>
                            </div>
                            <div className="bg-base-100 p-3 rounded-lg">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">Inception-v3</span>
                                    <span className="text-success font-bold">89.45% / 99.05%</span>
                                </div>
                            </div>
                            <div className="bg-base-100 p-3 rounded-lg">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">ResNet50</span>
                                    <span className="text-success font-bold">88.48% / 99.00%</span>
                                </div>
                            </div>
                            <div className="bg-base-100 p-3 rounded-lg">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">AlexNet</span>
                                    <span className="text-success font-bold">87.51% / 98.65%</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs text-base-content/60 mt-4">
                            Partial fine-tuning only • Real depth data from Kinect • 51 classes
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Colormap Analysis */}
        <div className="bg-gradient-to-r from-warning/5 to-accent/5 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">🎨 Analisi Colormap Strategy</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-warning">🔍 Scoperta Chiave</h3>
                    <div className="prose max-w-none">
                        <p>
                            L'analisi sistematica di diversi colormap ha rivelato che il semplice 
                            <strong> "channel stacking"</strong> (duplicazione del canale depth) 
                            è <strong>altrettanto efficace</strong> quanto colormap complessi come 
                            Viridis, Plasma o Magma.
                        </p>
                        <p>
                            Questo risultato è <strong>controintuitivo</strong> ma molto importante 
                            per applicazioni pratiche: non serve preprocessing complesso!
                        </p>
                    </div>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-accent">📊 Risultati Colormap</h3>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center bg-base-100 p-2 rounded">
                            <span><strong>Stacked (Best)</strong></span>
                            <span className="text-success">16.48% / 33.05%</span>
                        </div>
                        <div className="flex justify-between items-center bg-base-100 p-2 rounded">
                            <span>Grayscale</span>
                            <span className="text-success">16.40% / 32.94%</span>
                        </div>
                        <div className="flex justify-between items-center bg-base-100 p-2 rounded">
                            <span>Magma</span>
                            <span className="text-warning">15.01% / 30.41%</span>
                        </div>
                        <div className="flex justify-between items-center bg-base-100 p-2 rounded">
                            <span>Viridis</span>
                            <span className="text-warning">13.16% / 26.66%</span>
                        </div>
                        <div className="flex justify-between items-center bg-base-100 p-2 rounded">
                            <span>Plasma</span>
                            <span className="text-error">12.36% / 25.34%</span>
                        </div>
                    </div>
                    <div className="text-xs text-base-content/60 mt-3">Inception-v3 baseline results</div>
                </div>
            </div>
        </div>

        {/* Privacy Applications */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">🏥 Applicazioni Privacy-Sensitive</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Healthcare */}
                <div className="card bg-error/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">🏥</div>
                        <h3 className="card-title justify-center text-error">Healthcare</h3>
                        <ul className="text-sm space-y-2 mt-4">
                            <li>• Fall detection systems</li>
                            <li>• Patient monitoring</li>
                            <li>• Gait analysis</li>
                            <li>• Pose estimation</li>
                        </ul>
                    </div>
                </div>

                {/* Eldercare */}
                <div className="card bg-info/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">👴</div>
                        <h3 className="card-title justify-center text-info">Eldercare</h3>
                        <ul className="text-sm space-y-2 mt-4">
                            <li>• Activity monitoring</li>
                            <li>• Safety surveillance</li>
                            <li>• Behavior analysis</li>
                            <li>• Emergency detection</li>
                        </ul>
                    </div>
                </div>

                {/* Education */}
                <div className="card bg-success/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">👶</div>
                        <h3 className="card-title justify-center text-success">Childcare</h3>
                        <ul className="text-sm space-y-2 mt-4">
                            <li>• Playground safety</li>
                            <li>• Activity recognition</li>
                            <li>• Behavioral monitoring</li>
                            <li>• Development tracking</li>
                        </ul>
                    </div>
                </div>

                {/* Surveillance */}
                <div className="card bg-warning/10 shadow-xl">
                    <div className="card-body text-center">
                        <div className="text-4xl mb-4">📹</div>
                        <h3 className="card-title justify-center text-warning">Surveillance</h3>
                        <ul className="text-sm space-y-2 mt-4">
                            <li>• Public safety</li>
                            <li>• Crowd analysis</li>
                            <li>• Anonymous tracking</li>
                            <li>• Behavior detection</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Technical Innovation */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold font-Outfit mb-6 text-center">⚙️ Innovazioni Tecniche</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">🔬 Metodologia Scientifica</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm"><strong>Multi-dataset validation:</strong> Synthetic + Real depth data</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm"><strong>Systematic colormap analysis:</strong> 5 diverse mappings</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm"><strong>Three training regimes:</strong> Baseline, partial, complete</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm"><strong>Standard architectures:</strong> No custom modifications</span>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-secondary">🚀 Contributi Innovativi</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-sm"><strong>First systematic study:</strong> Depth-only CNN classification</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-sm"><strong>Marigold integration:</strong> Large-scale synthetic depth</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-sm"><strong>Practical preprocessing:</strong> Simple stacking = best</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-sm"><strong>Privacy benchmark:</strong> Foundation for future work</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Future Work */}
        <div className="card bg-gradient-to-r from-accent/10 to-info/10 shadow-xl mb-8">
            <div className="card-body">
                <div className="text-center mb-6">
                    <div className="text-4xl mb-4">🔮</div>
                    <h3 className="card-title justify-center text-2xl font-Outfit">Direzioni Future</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-accent mb-3">🎯 Estensioni Immediate</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                <span><strong>Full ImageNet:</strong> Scaling to 1.4M images</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                <span><strong>Semantic Segmentation:</strong> Beyond classification</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                <span><strong>Learned Encodings:</strong> Autoencoder depth→RGB</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                <span><strong>Object Detection:</strong> YOLO/R-CNN adaptation</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-info mb-3">🏥 Applicazioni Pratiche</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-info rounded-full"></div>
                                <span><strong>Real-time Systems:</strong> Edge deployment</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-info rounded-full"></div>
                                <span><strong>Multi-modal Fusion:</strong> Depth + Audio/IMU</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-info rounded-full"></div>
                                <span><strong>Anomaly Detection:</strong> Privacy-safe monitoring</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-info rounded-full"></div>
                                <span><strong>Clinical Validation:</strong> Hospital deployment</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Research Stats */}
        <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-base-200 w-full mb-8">
            <div className="stat">
                <div className="stat-figure text-primary">
                    <div className="text-3xl">📊</div>
                </div>
                <div className="stat-title">Dataset</div>
                <div className="stat-value text-primary">3</div>
                <div className="stat-desc">ImageNet + RGB-D</div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <div className="text-3xl">🤖</div>
                </div>
                <div className="stat-title">CNN Models</div>
                <div className="stat-value text-secondary">4</div>
                <div className="stat-desc">Standard architectures</div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-accent">
                    <div className="text-3xl">🎯</div>
                </div>
                <div className="stat-title">Best Accuracy</div>
                <div className="stat-value text-accent">92%</div>
                <div className="stat-desc">Real depth data</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-info">
                    <div className="text-3xl">🎨</div>
                </div>
                <div className="stat-title">Colormap</div>
                <div className="stat-value text-info">5</div>
                <div className="stat-desc">Systematic analysis</div>
            </div>
        </div>

        {/* Impact Statement */}
        <div className="alert alert-success">
            <div className="flex items-center gap-3">
                <div className="text-2xl">🌟</div>
                <div>
                    <h3 className="font-semibold">Impatto Sociale e Tecnologico</h3>
                    <p className="text-sm">
                        Questo progetto stabilisce le <strong>fondamenta scientifiche</strong> per sistemi di computer vision 
                        privacy-preserving, dimostrando che è possibile raggiungere performance competitive senza 
                        compromettere la privacy. I risultati aprono la strada a <strong>applicazioni etiche</strong> dell'AI 
                        in ambienti sensibili, proteggendo individui vulnerabili mentre manteniamo capacità di analisi avanzate.
                    </p>
                </div>
            </div>
        </div>
    </ProjectContainer>
}
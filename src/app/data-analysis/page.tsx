import { Metadata } from 'next';
import DataAnalysisClient from '@/components/analysis/DataAnalysisClient';

export const metadata: Metadata = {
  title: 'Data Analysis Hub | Advanced Insights',
  description: 'Upload and analyze your data files (JSON, CSV) with our advanced, client-side visualization engine. Extract actionable insights and performance metrics.',
  keywords: ['Data Analysis', 'CSV Parser', 'JSON Analyzer', 'Data Visualization', 'Kavindu Kokila', 'Aetheris'],
  openGraph: {
    title: 'Data Analysis Hub | Advanced Insights',
    description: 'Autonomous data parsing and visualization tool built for speed and precision.',
    type: 'website',
  },
};

export default function DataAnalysisPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-heading mb-4 neon-text-cyan uppercase tracking-tighter">
            Data Analysis Hub
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            How do we transform raw data into architectural insights? Our system provides 
            real-time, client-side parsing and visualization for complex datasets.
          </p>
        </header>

        <section className="neon-border rounded-xl p-6 md:p-10 bg-black/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-neon-cyan/30">
            SYSTEM_RESOURCE: DATA_PROCESSOR_V2
          </div>
          
          <DataAnalysisClient />
        </section>

        {/* FAQ Section for AEO */}
        <section className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-heading mb-8 neon-text-magenta uppercase tracking-widest text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <h3 className="text-lg font-bold mb-2">What file formats are supported?</h3>
              <p className="text-foreground/70">
                Our analyzer currently supports standard JSON and CSV files. We process all 
                data securely on your device, ensuring privacy and low-latency performance.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <h3 className="text-lg font-bold mb-2">How is data security handled?</h3>
              <p className="text-foreground/70">
                Aetheris uses client-side processing only. Your data never leaves your browser, 
                making it the most secure environment for sensitive architectural logs or datasets.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

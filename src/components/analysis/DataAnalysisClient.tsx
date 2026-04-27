'use client';

import React, { useState, useCallback } from 'react';
import Papa from 'papaparse';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Cell,
} from 'recharts';
import { Upload, FileText, CheckCircle2, AlertCircle, Trash2 } from 'lucide-react';

export default function DataAnalysisClient() {
  const [data, setData] = useState<any[]>([]);
  const [fileName, setFileName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    setError('');
    setFileName(file.name);

    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target?.result as string;
      
      if (file.name.endsWith('.json')) {
        try {
          const parsed = JSON.parse(content);
          const normalized = Array.isArray(parsed) ? parsed : [parsed];
          setData(normalized.slice(0, 50)); // Limit for visualization sanity
        } catch (err) {
          setError('Invalid JSON format');
        }
      } else if (file.name.endsWith('.csv')) {
        Papa.parse(content, {
          header: true,
          dynamicTyping: true,
          complete: (results) => {
            setData(results.data.slice(0, 50));
          },
          error: () => {
            setError('Error parsing CSV');
          },
        });
      } else {
        setError('Unsupported file type. Use JSON or CSV.');
      }
      setIsLoading(false);
    };

    reader.readAsText(file);
  }, []);

  const clearData = () => {
    setData([]);
    setFileName('');
    setError('');
  };

  // Extract keys for chart selection (just take first few numeric ones)
  const keys = data.length > 0 ? Object.keys(data[0]).filter(k => typeof data[0][k] === 'number') : [];
  const labelKey = data.length > 0 ? Object.keys(data[0])[0] : '';

  return (
    <div className="space-y-8">
      {!data.length && (
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-neon-cyan/20 rounded-2xl p-12 hover:border-neon-cyan/50 transition-colors group">
          <label className="cursor-pointer flex flex-col items-center">
            <Upload className="w-16 h-16 text-neon-cyan mb-4 animate-bounce" />
            <span className="text-xl font-heading text-neon-cyan mb-2">Upload Data Stream</span>
            <span className="text-foreground/50 text-sm">JSON or CSV formats supported</span>
            <input 
              type="file" 
              accept=".json,.csv" 
              className="hidden" 
              onChange={handleFileUpload}
            />
          </label>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
          <AlertCircle className="w-5 h-5" />
          <p>{error}</p>
        </div>
      )}

      {isLoading && (
        <div className="flex flex-col items-center py-12">
          <div className="w-12 h-12 border-4 border-neon-cyan/20 border-t-neon-cyan rounded-full animate-spin mb-4" />
          <p className="text-neon-cyan animate-pulse">Initializing Data Parser...</p>
        </div>
      )}

      {data.length > 0 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-400 w-5 h-5" />
              <div>
                <p className="font-bold text-sm uppercase tracking-wider">{fileName}</p>
                <p className="text-xs text-foreground/50">{data.length} records parsed successfully</p>
              </div>
            </div>
            <button 
              onClick={clearData}
              className="p-2 hover:bg-red-500/20 rounded-full text-red-400 transition-colors"
              title="Clear Data"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-black/60 p-6 rounded-2xl border border-white/10 h-[400px]">
              <h3 className="text-sm font-heading mb-6 uppercase tracking-widest text-foreground/70">
                Primary Distribution ({keys[0] || 'N/A'})
              </h3>
              <ResponsiveContainer width="100%" height="85%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                  <XAxis 
                    dataKey={labelKey} 
                    stroke="#444" 
                    fontSize={10}
                    tick={{ fill: '#888' }}
                  />
                  <YAxis stroke="#444" fontSize={10} tick={{ fill: '#888' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#05080a', border: '1px solid #333' }}
                    itemStyle={{ color: '#00f3ff' }}
                  />
                  <Bar dataKey={keys[0]} fill="#00f3ff">
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fillOpacity={0.8 - (index * 0.02)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-black/60 p-6 rounded-2xl border border-white/10 h-[400px]">
              <h3 className="text-sm font-heading mb-6 uppercase tracking-widest text-foreground/70">
                Trend Analysis ({keys[1] || keys[0] || 'N/A'})
              </h3>
              <ResponsiveContainer width="100%" height="85%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                  <XAxis 
                    dataKey={labelKey} 
                    stroke="#444" 
                    fontSize={10}
                  />
                  <YAxis stroke="#444" fontSize={10} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#05080a', border: '1px solid #333' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey={keys[1] || keys[0]} 
                    stroke="#ff00ff" 
                    strokeWidth={2}
                    dot={{ fill: '#ff00ff', r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-foreground/50 uppercase tracking-tighter text-[10px]">
                <tr>
                  {Object.keys(data[0]).map(key => (
                    <th key={key} className="px-4 py-3 border-b border-white/10">{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {data.slice(0, 10).map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    {Object.values(row).map((val: any, j) => (
                      <td key={j} className="px-4 py-3 text-foreground/80">
                        {typeof val === 'object' ? JSON.stringify(val) : String(val)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {data.length > 10 && (
              <div className="p-3 text-center text-xs text-foreground/30 bg-black/20">
                Showing first 10 of {data.length} records. System optimized for visibility.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

# 📊 Data Analysis Hub: Client-Side Engine Guide

One of the standout features of the Aetheris template is the **Data Analysis Hub** (located at `/data-analysis`). This section is a sandboxed, client-side data processor allowing visitors to upload JSON or CSV logs and instantly inspect, parse, and visualize them using graphical models.

This guide details how the engine operates, how to prepare compatible files, and how developers can extend its features.

---

## 🔒 Security First: Client-Side Isolation

> [!IMPORTANT]
> **Data Privacy Promise:** Aetheris performs all data extraction, parsing, and rendering entirely inside the user's browser. It uses HTML5 `FileReader` and local state operations. **No data is ever sent to a remote server, third-party analyzer, or database.** This makes it fully secure for uploading private corporate logs, credentials graphs, or sensitive operational logs.

---

## 🛠️ Underlying Technologies

*   **File Parsing**: Powered by [PapaParse](https://www.papaparse.com/), the fastest in-browser CSV parser.
*   **Data Visualization**: Built on top of [Recharts](https://recharts.org/), a modular, React-native charting library that aligns with responsive grid layouts.
*   **Responsive Tables**: Hand-crafted glassmorphism grid tables to inspect raw logs easily.

---

## 📁 Supported Formats & Structure

The analysis engine accepts files ending in **`.csv`** or **`.json`**. For optimal parsing and graph generation:
1.  **Tabular Format**: Ensure the file contains structured arrays of key-value pairs (or columns).
2.  **Identifiers**: The first column (or JSON key) is used as the label on the horizontal (X) axis.
3.  **Numerical Metrics**: The engine automatically detects keys containing numeric variables and assigns them to the graphical engines (BarChart and LineChart).

### Sample CSV Format (`system_metrics.csv`)
Save the following as a `.csv` file and try uploading it in the hub:
```csv
timestamp,cpu_usage,memory_usage,request_count
10:00,45,62,1200
10:05,52,65,1350
10:10,61,68,1420
10:15,38,60,1100
10:20,49,63,1250
10:25,75,72,1680
```

### Sample JSON Format (`project_statistics.json`)
```json
[
  { "month": "Jan", "commits": 140, "releases": 3 },
  { "month": "Feb", "commits": 185, "releases": 4 },
  { "month": "Mar", "commits": 220, "releases": 6 },
  { "month": "Apr", "commits": 195, "releases": 5 }
]
```

---

## ⚙️ How the Processing Pipeline Works

Open the file [`src/components/analysis/DataAnalysisClient.tsx`](file:///e:/PROJECTS/react/portfolio-2026/src/components/analysis/DataAnalysisClient.tsx).

### 1. Ingesting Streams
The component uses `FileReader.readAsText()` inside a `handleFileUpload` callback:
```typescript
const reader = new FileReader();
reader.onload = (e) => {
  const content = e.target?.result as string;
  if (file.name.endsWith('.json')) {
    // ... JSON.parse logic ...
  } else if (file.name.endsWith('.csv')) {
    // ... Papa.parse CSV parser ...
  }
};
```

### 2. Auto-Detecting Keys
To avoid rigid structures, the engine parses dynamic columns. It scans keys in the first row and dynamically filters out numeric metrics to feed the graphs:
```typescript
// Extract numeric keys for chart plotting
const keys = data.length > 0 ? Object.keys(data[0]).filter(k => typeof data[0][k] === 'number') : [];
// Pick first overall key to represent X Axis labels
const labelKey = data.length > 0 ? Object.keys(data[0])[0] : '';
```

### 3. Rendering Charts
*   **Bar Chart**: Plots the first discovered numeric metric (e.g. `cpu_usage`).
*   **Line Chart**: Plots the second discovered numeric metric (e.g. `memory_usage`).
*   **Table View**: Slices and displays the first 10 rows in a beautifully designed tabular overlay.

---

## 🚀 Customizing and Extending the Engine

### Adding More Recharts Diagrams
To add a Pie Chart or Area Chart, import the corresponding components from `recharts` in [`DataAnalysisClient.tsx`](file:///e:/PROJECTS/react/portfolio-2026/src/components/analysis/DataAnalysisClient.tsx) and insert them inside the layout container:

```tsx
import { AreaChart, Area } from 'recharts';

// Inside your rendering section:
<ResponsiveContainer width="100%" height="85%">
  <AreaChart data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke="#222" />
    <XAxis dataKey={labelKey} stroke="#444" />
    <YAxis stroke="#444" />
    <Tooltip contentStyle={{ backgroundColor: '#05080a', border: '1px solid #333' }} />
    <Area type="monotone" dataKey={keys[0]} stroke="#00f3ff" fill="#00f3ff" fillOpacity={0.2} />
  </AreaChart>
</ResponsiveContainer>
```

### Increasing Row Limits
For browser performance sanity, Aetheris defaults to parsing a maximum of 50 rows for graph visualization:
```typescript
setData(results.data.slice(0, 50));
```
If you are dealing with heavier workloads, you can increase this limit to `100` or `500`.

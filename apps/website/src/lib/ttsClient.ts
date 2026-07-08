export async function fetchSpeech(text: string, lang = 'en') {
  const params = new URLSearchParams({ text, lang });
  const res = await fetch(`http://140.82.33.249:5002/speak?${params.toString()}`);

  if (!res.ok) throw new Error('TTS fetch failed');

  const blob = await res.blob();
  return URL.createObjectURL(blob); // For use in <audio src=... />
}

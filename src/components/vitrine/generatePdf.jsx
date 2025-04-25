import QRCode from "qrcode";
import jsPDF from "jspdf";

const generateQrDataURL = async (text) => {
  try {
    const url = await QRCode.toDataURL(text, { width: 200 });
    return url;
  } catch (err) {
    console.error("Erro ao gerar QRCode:", err);
    return null;
  }
};

export const GeneratePdf = async (eventoNome, projetos) => {
  if (!projetos || projetos.length === 0) {
    alert("Não há projetos para esse evento.");
    return;
  }

  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  const qrSize = 63;
  const spacingX = 30;
  const spacingY = 30;

  const marginX = 25;
  const marginY = 40;

  let x = marginX;
  let y = marginY + 20;
  let count = 0;

  const addPageHeader = () => {
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(eventoNome, pageWidth / 2, 20, { align: "center" });

    doc.setDrawColor(200);
    doc.line(marginX, 25, pageWidth - marginX, 25);
  };

  addPageHeader();

  for (let i = 0; i < projetos.length; i++) {
    const projeto = projetos[i];
    const qrImage = await generateQrDataURL(projeto.qrcode);
    const projetoNome = projeto.projeto.titulo;
  
    if (qrImage) {
      const text = `Projeto: ${projetoNome}`;
      const textWidth = doc.getTextWidth(text);
      doc.addImage(qrImage, "PNG", x, y, qrSize, qrSize);
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");

      const textX = x + (qrSize / 2) - (doc.getTextWidth(text) / 2);
      doc.text(text, textX, y + qrSize + 5);

  
      x += qrSize + spacingX;
  
      if ((i + 1) % 2 === 0) {
        x = marginX; 
        y += qrSize + spacingY + 10; 
      }
  
      if ((i + 1) % 4 === 0 && i < projetos.length - 1) {
        doc.addPage();
        addPageHeader();
        x = marginX;
        y = marginY + 20;
      }
    }
  }
  

  doc.save(`QRCodes_${eventoNome}.pdf`);
};

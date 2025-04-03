import React from 'react';
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { selectedTemplatesState, reorderTemplates } from "../../store/slices/selectedTemplateSlice";
import './checkout.scss';
export interface TemplateItem {
    id: string;
    title: string;
    iframeUrl?: string;
}


const DragDropList: React.FC = () => {

    const selectedTemp = useAppSelector(selectedTemplatesState.selected);
    const dispatch = useAppDispatch();
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

    const handleDragStart = (index: number) => {
        setDraggedIndex(index);
    };

    const handleDragOver = (index: number, e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (draggedIndex === null || draggedIndex === index) return;

        const updated = [...selectedTemp];
        const [removed] = updated.splice(draggedIndex, 1);
        updated.splice(index, 0, removed);
        dispatch(reorderTemplates(updated));
        setDraggedIndex(index);
    };

    return (
        <div className="draggable-item-container">
            {selectedTemp.map((template, index) => (
                <div
                    key={template.id}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={(e) => handleDragOver(index, e)}
                    className="iframe-wrapper"
                    style={{ opacity: draggedIndex === index ? 0.5 : 1 }}
                >
                    {template.iframeUrl && (
                        <iframe
                            src={template.iframeUrl}
                            title={template.title}
                            className="scaled-iframe"
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default DragDropList;

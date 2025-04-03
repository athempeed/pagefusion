import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TemplateItem } from './checkout';

interface SortableItemProps {
    id: string;
    template: TemplateItem;
}

export const SortableItem: React.FC<SortableItemProps> = ({ id, template }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id });

    const style: React.CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition,
        border: '1px solid #ccc',
        borderRadius: '12px',
        padding: '16px',
        background: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
        cursor: 'grab',
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {template.iframeUrl && (
                <iframe
                    src={template.iframeUrl}
                    className='iframe-'
                    title={template.title}
                />
            )}
        </div>
    );
};

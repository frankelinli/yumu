( function( blocks, element, editor ) {
    var el = element.createElement;
    var RichText = editor.RichText;

    blocks.registerBlockType( 'custom/accordion', {
        title: '手风琴',
        icon: 'list-view',
        category: 'layout',
        attributes: {
            title: {
                type: 'array',
                source: 'children',
                selector: 'button'
            },
            content: {
                type: 'array',
                source: 'children',
                selector: '.panel'
            }
        },
        edit: function( props ) {
            return el( 'div', { className: props.className },
                el( RichText, {
                    tagName: 'button',
                    className: 'accordion',
                    value: props.attributes.title,
                    onChange: function( value ) {
                        props.setAttributes( { title: value } );
                    },
                    placeholder: '输入标题...'
                } ),
                el( RichText, {
                    tagName: 'div',
                    className: 'panel',
                    value: props.attributes.content,
                    onChange: function( value ) {
                        props.setAttributes( { content: value } );
                    },
                    placeholder: '输入内容...'
                } )
            );
        },
        save: function( props ) {
            return el( 'div', {},
                el( RichText.Content, {
                    tagName: 'button',
                    className: 'accordion',
                    value: props.attributes.title
                } ),
                el( RichText.Content, {
                    tagName: 'div',
                    className: 'panel',
                    value: props.attributes.content
                } )
            );
        },
    } );
} )( window.wp.blocks, window.wp.element, window.wp.editor );
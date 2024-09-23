/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */


import { useState, useEffect } from '@wordpress/element';

export default function Edit() {

	//state for current date and hour
	const [currentDateTime, setCurrentDateTime] = useState(new Date());

	//refresh time every minute
	useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 60000); // update every minute (60000 ms)
        return () => clearInterval(intervalId); //clear interval when exit component
    }, []);

	const currentDate = currentDateTime.toLocaleDateString().toString()
    const currentHour = currentDateTime.getHours().toString().padStart(2, '0');
    const currentMinutes = currentDateTime.getMinutes().toString().padStart(2, '0');

	return (
		<p { ...useBlockProps() }>
			{currentDate} - {currentHour}:{currentMinutes}
		</p>
	);
}

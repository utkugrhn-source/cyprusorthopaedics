/**
 * Journal cover thumbnails, keyed by the journal's abbreviated name as written in the citations.
 * Only covers supplied by the clinic are listed; a journal without one gets the plain name tile.
 * Files live in public/img/journals/.
 */
export const JOURNAL_COVERS: Record<string, string> = {
  "Injury": "/img/journals/injury.jpg",
  "Acta Orthop Traumatol Turc": "/img/journals/aott.jpg",
};

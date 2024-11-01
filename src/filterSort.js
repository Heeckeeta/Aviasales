function myFilter(tickets, all, without, one, two, three) {
  if (all) return tickets;
  const counts = [];
  if (without) counts.push(0);
  if (one) counts.push(1);
  if (two) counts.push(2);
  if (three) counts.push(3);
  if (counts.length === 0) return [];
  return tickets.filter((ticket) => {
    let bool = false;
    counts.forEach((count) => {
      if (count === ticket.segments[0].stops.length) bool = true;
      if (count === ticket.segments[1].stops.length) bool = true;
    });
    return bool;
  });
}

function mySort(tickets, tab) {
  let newTickets = [...tickets];
  if (tab === 'cheap') {
    return newTickets.sort((a, b) => a.price - b.price);
  }
  if (tab === 'fast') {
    return newTickets.sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration - b.segments[0].duration - b.segments[1].duration
    );
  }
  if (tab === 'optimal') {
    return newTickets.sort(
      (a, b) =>
        a.price +
        a.segments[0].duration +
        a.segments[1].duration -
        b.price -
        b.segments[0].duration -
        b.segments[1].duration
    );
  }
}

export default function filterSort(tickets, tab, { all, without, one, two, three }) {
  let newTickets = myFilter(tickets, all, without, one, two, three);
  return mySort(newTickets, tab);
}
